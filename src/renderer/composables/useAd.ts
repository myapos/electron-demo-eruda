import { onMounted } from "vue";

type slotType = {
  getSlotElementId: () => string;
};

let googleTagsAreEnabled = false;

function useAd(
  adId: string,
  slotPath: string,
  dimensions: [number, number] | Array<[number, number]>
) {
  onMounted(() => {
    if (!window.googletag) {
      window.googletag = { cmd: [] };
    }

    let googletag = window.googletag || { cmd: [] };

    googletag.cmd.push(() => {
      // Defensive check: if slot already exists, do not redefine
      const existingSlot = googletag
        .pubads()
        .getSlots()
        .find((slot: slotType) => slot.getSlotElementId() === adId);

      if (!existingSlot) {
        const slot = googletag
          .defineSlot(slotPath, dimensions, adId)
          .addService(googletag.pubads());

        if (!slot) {
          console.error("Failed to define GPT slot.");
          return;
        }

        if (!googleTagsAreEnabled) {
          googleTagsAreEnabled = true;
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
        }
      }

      googletag.display(adId);
    });
  });
}

export default useAd;
