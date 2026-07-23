"use client";

import type { SVGProps } from "react";
import { motion } from "motion/react";

export type EyeEmotion =
    | "anger"
    | "sqr-both"
    | "sqr-l"
    | "sqr-r"
    | "sqr-big"
    | "nutral"
    | "circles"
    | "bor"
    | "bor-l"
    | "bor-r"
    | "sad"
    | "sad-l"
    | "sad-r"
    | "normal-blink";

interface EyeColor {
    left?: string;
    right?: string;
}

// @ts-ignore
interface TinyIconProps extends SVGProps<SVGSVGElement> {
    emotion?: EyeEmotion;
    color?: EyeColor;
}

const BOX_LEFT = "M 471.127 301.449 V 447.661 H 324.915 V 301.449 Z";
const BOX_RIGHT = "M 633.585 301.449 V 447.661 H 487.373 V 301.449 Z";

const BLINK_LEFT = "M 471.127 370.000 V 379.000 H 324.915 V 370.000 Z";
const BLINK_RIGHT = "M 633.585 370.000 V 379.000 H 487.373 V 370.000 Z";

const BOX_BIG_LEFT = "M 481.127 271.449 V 477.661 H 314.915 V 271.449 Z";
const BOX_BIG_RIGHT = "M 643.585 271.449 V 477.661 H 477.373 V 271.449 Z";

const ANGER_LEFT = "M 471.127 371.847 V 447.661 H 324.915 V 350.186 Z";
const ANGER_RIGHT = "M 633.585 350.186 V 447.661 H 487.373 V 371.847 Z";

const SAD_LEFT = "M 471.127 350.186 V 447.661 H 324.915 V 371.847 Z";
const SAD_RIGHT = "M 633.585 371.847 V 447.661 H 487.373 V 350.186 Z";

const CIRCLE_LEFT =
    "M 398.021 301.449 C 438.502 301.449 471.127 334.074 471.127 374.555 C 471.127 415.036 438.502 447.661 398.021 447.661 C 357.54 447.661 324.915 415.036 324.915 374.555 C 324.915 334.074 357.54 301.449 398.021 301.449 Z";

const CIRCLE_RIGHT =
    "M 560.479 301.449 C 600.960 301.449 633.585 334.074 633.585 374.555 C 633.585 415.036 600.960 447.661 560.479 447.661 C 519.998 447.661 487.373 415.036 487.373 374.555 C 487.373 334.074 519.998 301.449 560.479 301.449 Z";

const BOR_LEFT = "M 471.127 374.555 V 447.661 H 324.915 V 374.555 Z";
const BOR_RIGHT = "M 633.585 374.555 V 447.661 H 487.373 V 374.555 Z";

export function TinyIcon({
                             className,
                             emotion = "normal-blink",
                             color = { left: "white", right: "white" },
                             ...props
                         }: TinyIconProps) {
    const isBlinking = emotion === "normal-blink";

    const getLeftEyeTarget = () => {
        switch (emotion) {
            case "anger":
            case "sqr-r":
                return ANGER_LEFT;
            case "sad":
            case "sad-l":
                return SAD_LEFT;
            case "sqr-big":
                return BOX_BIG_LEFT;
            case "circles":
                return CIRCLE_LEFT;
            case "bor":
            case "bor-l":
                return BOR_LEFT;
            case "bor-r":
            case "sad-r":
            case "nutral":
            case "normal-blink":
            case "sqr-l":
            case "sqr-both":
            default:
                return BOX_LEFT;
        }
    };

    const getRightEyeTarget = () => {
        switch (emotion) {
            case "anger":
            case "sqr-l":
                return ANGER_RIGHT;
            case "sad":
            case "sad-r":
                return SAD_RIGHT;
            case "sqr-big":
                return BOX_BIG_RIGHT;
            case "circles":
                return CIRCLE_RIGHT;
            case "bor":
            case "bor-r":
                return BOR_RIGHT;
            case "bor-l":
            case "sad-l":
            case "nutral":
            case "normal-blink":
            case "sqr-r":
            case "sqr-both":
            default:
                return BOX_RIGHT;
        }
    };

    const leftEyeColor = color?.left ?? "white";
    const rightEyeColor = color?.right ?? "white";

    return (
        <svg
            width="852"
            height="852"
            viewBox="0 0 852 852"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <g filter="url(#filter0_d_10_20)">
                <path
                    d="M288.114 137.886C364.266 61.7336 487.734 61.7336 563.886 137.886L714.114 288.114C790.266 364.266 790.266 487.734 714.114 563.886L563.886 714.114C487.734 790.266 364.266 790.266 288.114 714.114L137.886 563.886C61.7336 487.734 61.7336 364.266 137.886 288.114L288.114 137.886Z"
                    fill="url(#paint0_linear_10_20)"
                />
            </g>
            <motion.path
                animate={
                    isBlinking
                        ? { d: [BOX_LEFT, BLINK_LEFT, BOX_LEFT] }
                        : { d: getLeftEyeTarget() }
                }
                fill={leftEyeColor}
                transition={
                    isBlinking
                        ? {
                            duration: 2.5,
                            repeat: Infinity,
                            times: [0, 0.08, 0.16],
                            ease: "easeInOut",
                        }
                        : { duration: 0.35, ease: "easeInOut" }
                }
            />
            <motion.path
                animate={
                    isBlinking
                        ? { d: [BOX_RIGHT, BLINK_RIGHT, BOX_RIGHT] }
                        : { d: getRightEyeTarget() }
                }
                fill={rightEyeColor}
                transition={
                    isBlinking
                        ? {
                            duration: 2.5,
                            repeat: Infinity,
                            times: [0, 0.08, 0.16],
                            ease: "easeInOut",
                        }
                        : { duration: 0.35, ease: "easeInOut" }
                }
            />
            <defs>
                <filter
                    id="filter0_d_10_20"
                    x="76.7716"
                    y="80.7716"
                    width="698.457"
                    height="698.457"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_20" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_20" result="shape" />
                </filter>
                <linearGradient
                    id="paint0_linear_10_20"
                    x1="801.458"
                    y1="693.153"
                    x2="90.2542"
                    y2="267.153"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AD6FFF" />
                    <stop offset="1" stopColor="#923FFF" />
                </linearGradient>
            </defs>
        </svg>
    );
}