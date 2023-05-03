import { useRouter } from "next/router";
import { useAPIUserProfile } from "../../api/user/useUserProfileAPI";
import { Avatar } from "../../components/avatar/Avatar";
import { Loader } from "../../components/loader/Loader";
import * as S from "./UserProfile.style";

interface Props {
    csrf: string;
}
export const UserProfileView = ({ csrf }: Props) => {
    const { query } = useRouter();

    // const { data, isLoading } = useAPIUserProfile({
    //     csrf,
    //     id: query.id as string,
    // });
    return (
        <S.Container>
            {/* {isLoading ? ( */}
            {/* <Loader /> */}
            {/* ) : ( */}
            <>
                <Avatar size={70} />
                <span>name surname</span>
            </>
            {/* )} */}
        </S.Container>
    );
};
