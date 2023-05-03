import { useForm } from "react-hook-form";
import { DefaultAvatar } from "../../assets/DefaultAvatar";
import { BACKEND_URL } from "../../config";
import { useAuth } from "../../context/UserContext";
import { Avatar } from "../avatar/Avatar";
import { SearchInput } from "../inputs/searchbar/Searchbar";
import { TextInput } from "../inputs/text/TextInput";
import * as S from "./Header.style";

interface FormTypes {
    search: string;
}

export const Header = () => {
    const { session } = useAuth();
    const {
        register,
        formState: { errors },
    } = useForm<FormTypes>();

    return (
        <S.Header>
            <div>
                {/* Temporary */}
                <SearchInput id="search" register={register} />
                {/* <svg
                    width="40"
                    height="40"
                    viewBox="0 0 36 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.8125 21.4375H23.1875M4.8125 14.4375H23.1875M4.8125 7.4375H23.1875"
                            stroke="white"
                            stroke-width="2.625"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </svg> */}

                <Avatar size={50} href={`/user/${session?.id}`} />
            </div>
        </S.Header>
    );
};
