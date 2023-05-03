import Image from "next/image";
import { DefaultAvatar } from "../../assets/DefaultAvatar";
import { Routes } from "../../routes/Routes";

import * as S from "./Avatar.style";

interface Props {
    size?: number;
    src?: string;
    border?: boolean;
    href?: string;
}

export const Avatar = ({ size = 50, border, src, href }: Props) => (
    <S.Container border={border}>
        <a href={href}>
            {src ? (
                <Image src={src} width={size} height={size} />
            ) : (
                <DefaultAvatar size={size} />
            )}
        </a>
    </S.Container>
);
