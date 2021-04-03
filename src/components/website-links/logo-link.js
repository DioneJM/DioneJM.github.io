/** @jsx jsx */
import React, {useEffect, useState} from "react";
import {jsx} from "theme-ui";
import WebsiteLink from "./website-link";
import useThemeColors from "../../hooks/useThemeColors";

const LogoLink = () => {
    return <WebsiteLink route={'/'} label={<div style={{
        border: '1px solid',
        paddingRight: '8px',
        paddingLeft: '8px',
        borderRadius: '4px'
    }}><LocalhostLogo/></div>}/>

}

const LocalhostLogo = () => {
    const {getThemeColor} = useThemeColors();
    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                style={{
                    fill: getThemeColor('linkColour')
                }}
                width="12vw" height="7vh" viewBox="0 0 620 190"
                preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,190.000000) scale(0.100000,-0.100000)"
           fill={getThemeColor('linkColour')} stroke="none">
            <path d="M220 965 l0 -775 105 0 105 0 0 775 0 775 -105 0 -105 0 0 -775z"/>
            <path d="M3000 965 l0 -775 105 0 105 0 0 775 0 775 -105 0 -105 0 0 -775z"/>
            <path d="M3440 965 l0 -775 110 0 110 0 0 478 0 478 28 26 c61 57 109 63 153
19 l29 -29 0 -486 0 -486 111 0 110 0 -4 503 c-4 543 -4 544 -59 612 -42 51
-82 68 -159 69 -52 0 -77 -6 -122 -28 -31 -15 -65 -38 -76 -52 -10 -13 -20
-24 -22 -24 -2 0 -1 51 3 112 3 62 7 168 7 236 l1 122 -110 0 -110 0 0 -775z"/>
            <path d="M5919 1668 c0 -2 -10 -70 -22 -153 l-22 -150 -58 -3 -57 -3 0 -74 0
-75 50 0 49 0 3 -437 3 -438 31 -55 c45 -79 93 -103 200 -98 68 3 87 7 122 31
42 27 42 28 42 88 0 54 -2 60 -17 54 -10 -3 -39 -9 -65 -12 -43 -5 -50 -3 -77
25 l-31 30 0 406 0 406 95 0 95 0 0 75 0 75 -95 0 -95 0 0 155 0 155 -75 0
c-41 0 -75 -1 -76 -2z"/>
            <path d="M877 1370 c-125 -22 -196 -107 -232 -279 -21 -99 -21 -507 0 -615 29
-153 99 -256 193 -284 48 -15 165 -16 211 -2 89 25 152 102 193 232 22 69 23
88 23 363 0 275 -1 294 -23 364 -49 156 -115 213 -260 225 -31 2 -78 1 -105
-4z m126 -170 c44 -35 50 -75 54 -372 6 -373 -8 -456 -81 -482 -44 -16 -78 3
-106 59 l-25 50 0 315 c0 338 5 381 50 426 30 30 73 31 108 4z"/>
            <path d="M1693 1370 c-126 -26 -200 -113 -237 -277 -22 -99 -23 -516 -1 -629
19 -102 55 -174 110 -222 57 -50 113 -66 212 -60 164 10 239 91 250 271 l6 87
-92 0 -91 0 0 -37 c-1 -122 -60 -190 -132 -152 -11 6 -29 32 -41 57 -19 43
-21 69 -25 317 -5 358 8 450 70 484 64 36 116 -23 125 -144 l6 -75 83 0 83 0
7 36 c3 19 4 71 2 114 -6 106 -39 163 -118 202 -61 30 -150 42 -217 28z"/>
            <path d="M2402 1369 c-107 -18 -171 -63 -208 -144 -24 -51 -31 -135 -18 -204
l7 -31 77 0 78 0 7 68 c9 77 23 111 61 141 39 31 89 28 125 -8 l29 -29 0 -132
0 -131 -32 -11 c-80 -28 -212 -103 -262 -149 -33 -30 -66 -73 -83 -107 -26
-52 -28 -66 -28 -172 0 -105 2 -120 26 -165 15 -29 44 -62 68 -80 36 -25 54
-30 116 -33 83 -5 138 15 196 69 18 16 34 28 36 25 3 -2 7 -23 10 -45 l6 -41
79 0 79 0 -3 503 c-3 487 -4 503 -24 547 -41 86 -104 123 -225 133 -35 3 -88
1 -117 -4z m158 -799 l0 -190 -32 -20 c-103 -63 -192 31 -168 177 11 65 29 99
77 144 29 29 101 75 121 79 1 0 2 -86 2 -190z"/>
            <path d="M4535 1370 c-125 -27 -185 -92 -226 -246 -16 -60 -22 -123 -26 -264
-11 -379 38 -573 165 -647 36 -22 61 -28 129 -31 103 -6 159 9 213 55 52 45
83 100 111 193 18 64 22 108 26 296 9 394 -35 553 -170 618 -58 28 -158 40
-222 26z m123 -165 c12 -9 29 -40 39 -73 15 -49 18 -100 18 -352 0 -252 -3
-303 -18 -352 -27 -90 -91 -116 -147 -60 -43 43 -50 101 -50 412 0 169 4 300
11 332 20 90 88 134 147 93z"/>
            <path d="M5301 1369 c-134 -23 -221 -127 -221 -265 0 -116 62 -227 253 -455
63 -75 120 -153 127 -173 26 -79 -20 -142 -98 -133 -25 3 -53 14 -67 27 -26
24 -45 88 -45 149 l0 41 -74 0 c-47 0 -78 -4 -82 -12 -17 -27 -17 -165 1 -217
22 -67 86 -124 157 -141 72 -18 213 -8 263 18 95 48 139 125 139 242 -1 127
-40 199 -229 420 -120 140 -161 212 -151 268 7 47 34 72 82 79 73 9 105 -37
119 -169 l6 -58 73 0 73 0 7 38 c12 75 6 176 -13 219 -43 94 -179 145 -320
122z"/>
        </g>
    </svg>
}

export default LogoLink;