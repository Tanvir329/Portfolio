// socialIcons.tsx
import React from "react";

import githubSvg from "@/assets/social/github.svg";
import linkedinSvg from "@/assets/social/linkedin.svg";
import mailSvg from "@/assets/social/mail.svg";

export const GithubIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={githubSvg} alt="GitHub" {...props} />
);

export const LinkedinIcon = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={linkedinSvg} alt="LinkedIn" {...props} />;

export const MailIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={mailSvg} alt="Mail" {...props} />
);
