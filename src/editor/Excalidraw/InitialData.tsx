import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState } from "@excalidraw/excalidraw/types/types";

export const InitialData = {
  elements: [] as ExcalidrawElement[],
  appState: {
    viewBackgroundColor: "#ffffff",
    currentItemFontFamily: 10,
  } as AppState,
  scrollToContent: true,
};
