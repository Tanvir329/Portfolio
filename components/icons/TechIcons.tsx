// techIcons.tsx
import React from "react";

import javaSvg from "@/assets/icons/java.svg";
import springbootSvg from '@/assets/icons/spring-boot.svg';
import reactSvg from "@/assets/icons/react.svg";
import dockerSvg from "@/assets/icons/docker.svg";
import kubernetesSvg from "@/assets/icons/kubernetes.svg";
import jenkinsSvg from "@/assets/icons/jenkins.svg";
import awsSvg from "@/assets/icons/aws.svg";
import sqlSvg from "@/assets/icons/mysql.svg";
import nosqlSvg from "@/assets/icons/mongodb.svg";
import mavenSvg from "@/assets/icons/maven.svg";
import cicdSvg from "@/assets/icons/cicd.svg";
import linuxSvg from "@/assets/icons/linux.svg";

export const JavaIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={javaSvg} alt="Java" {...props} />
);

export const SpringBootIcon = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={springbootSvg} alt="Spring Boot" {...props} />;

export const ReactIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={reactSvg} alt="React" {...props} />
);

export const DockerIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={dockerSvg} alt="Docker" {...props} />
);

export const KubernetesIcon = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={kubernetesSvg} alt="Kubernetes" {...props} />;

export const JenkinsIcon = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={jenkinsSvg} alt="Jenkins" {...props} />;

export const AwsIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={awsSvg} alt="AWS" {...props} />
);

export const SqlIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={sqlSvg} alt="SQL" {...props} />
);

export const NoSqlIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={nosqlSvg} alt="NoSQL" {...props} />
);

export const MavenIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={mavenSvg} alt="Maven" {...props} />
);

export const CICDIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={cicdSvg} alt="CI/CD" {...props} />
);

export const LinuxIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={linuxSvg} alt="linux" {...props} />
);


