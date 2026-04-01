"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import type { AnimationParams } from "animejs";

export function useAnimeOnMount(
  targets: string,
  animationProps: AnimationParams
) {
  const hasRun = useRef<boolean>(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    animate(targets, animationProps);
  }, [targets, animationProps]);
}
