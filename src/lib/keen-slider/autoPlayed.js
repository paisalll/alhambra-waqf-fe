// import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

// export type PausableAutoplayPluginOptions = {
//   interval?: number,
//   pauseInitially?: boolean,
//   pauseOnHover?: boolean,
// };

export const usePausableAutoplay = (interval = 2000) => {
  const [pause, setPause] = useState(false);
  const [pauseOnHover, setPauseOnHover] = useState(false);

  useInterval(
    () => {
      slider?.next?.();
    },
    pause ? null : interval,
  );

  useEffect(() => {
    if (slider && typeof slider.on === "function") {
      slider.on("dragStarted", () => {
        setPause(true);
      });
      slider.on("dragEnded", () => {
        setPause(false);
      });
      slider.on("animationStarted", () => {
        setPause(true);
      });
      slider.on("animationEnded", () => {
        setPause(false);
      });
    }
  }, [slider]);

  useEffect(() => {
    const onMouseOver = () => {
      if (pauseOnHover) {
        setPause(true);
      }
    };

    const onMouseOut = () => {
      if (pauseOnHover) {
        setPause(false);
      }
    };

    if (pauseOnHover && slider?.container) {
      slider.container.addEventListener("mouseover", onMouseOver);
      slider.container.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      if (slider?.container) {
        slider.container.removeEventListener("mouseover", onMouseOver);
        slider.container.removeEventListener("mouseout", onMouseOut);
      }
    };
  }, [pauseOnHover, slider]);

  return [setPause];
};
