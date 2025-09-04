// GeneralIcon.tsx
import React from "react";

import certificateSvg from "@/assets/general/certificate.svg";
import sunSvg from "@/assets/general/sun.svg";
import moonSvg from "@/assets/general/moon.svg";
import menuSvg from "@/assets/general/menu.svg";
import xSvg from "@/assets/general/moon.svg";
import downloadSvg from "@/assets/general/downloadIcon.svg";

export const CertificateIcon = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={certificateSvg} alt="Certificate" {...props} />;

export const SunIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={sunSvg} alt="Sun" {...props} />
);

export const MoonIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={moonSvg} alt="Moon" {...props} />
);

export const MenuIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={menuSvg} alt="Menu" {...props} />
);

export const XIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={xSvg} alt="Close" {...props} />
);

export const DownloadIcon = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={downloadSvg} alt="Download" {...props} />;
