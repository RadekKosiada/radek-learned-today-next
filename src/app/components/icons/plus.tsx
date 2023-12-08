export default function Plus({
    size,
    fillColor,
}: {
    size?: string;
    fillColor?: string;
}) {
    return (
        <svg
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 100 100"
            xmlSpace="preserve"
            fill={fillColor}
        >
            <g>
                <g>
                    <path d="M50,4C24.636,4,4,24.636,4,50s20.636,46,46,46s46-20.636,46-46S75.364,4,50,4z M50,89c-21.505,0-39-17.495-39-39    s17.495-39,39-39s39,17.495,39,39S71.505,89,50,89z" />
                    <path d="M63.893,45H55v-8.892c0-2.761-2.238-5-5-5s-5,2.239-5,5V45h-8.893c-2.762,0-5,2.239-5,5s2.238,5,5,5H45v8.893    c0,2.761,2.238,5,5,5s5-2.239,5-5V55h8.893c2.762,0,5-2.239,5-5S66.654,45,63.893,45z" />
                </g>
            </g>
        </svg>
    );
}
