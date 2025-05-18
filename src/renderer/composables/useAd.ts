import { onMounted } from "vue";

function useAd(adId: string, slotPath: string, dimensions: [number, number]) {
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

        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      }

      googletag.display(adId);
    });
  });
}

export default useAd;
