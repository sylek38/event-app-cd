import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAPIUserProfile } from "../../api/user/useUserProfileAPI";
import { Avatar } from "../../components/avatar/Avatar";
import { TextInput } from "../../components/inputs/text/TextInput";
import { Loader } from "../../components/loader/Loader";
import * as S from "./Messages.style";

interface FormTypes {
    text: string;
}

export const MessagesView = () => {
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<FormTypes>();
    const items = [
        // {
        //     id: 1,
        //     text: "Hejka",
        //     date: "15.03.2023, 18:44",
        // },
        {
            id: 1232,
            text: "ile osób na wyjście?",
            date: "15.03.2023, 18:44",
        },
        { id: 2, text: "Hej", date: "15.03.2023, 18:44" },
        {
            id: 3,
            text: "Najlepiej jak najwięcej :D",
            date: "15.03.2023, 18:45",
        },
        { id: 4, text: "A gdzie dokładnie?", date: "15.03.2023, 18:45" },
        { id: 5, text: "Zygmunta Rumla 7B", date: "15.03.2023, 18:45" },
        { id: 6, text: "Dzięki!", date: "15.03.2023, 18:45" },
        { id: 7, text: "Zapraszam", date: "15.03.2023, 18:45" },
        { id: 8, text: "Serdecznie", date: "15.03.2023, 18:45" },
    ];

    return (
        <S.Container>
            <S.Header>
                <div>name username </div>
                <svg
                    width="36"
                    height="31"
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
                </svg>
            </S.Header>
            <S.MessagesList>
                <S.FirstItem>
                    <span>Hej</span>
                    <span>15.03.2023, 18:44</span>
                </S.FirstItem>
                {items.map((item) => (
                    <S.Item key={item.id}>
                        <span>{item.text}</span>
                        <span>{item.date}</span>
                    </S.Item>
                ))}
            </S.MessagesList>
            <S.CreateMessage>
                <TextInput
                    register={register}
                    control={control}
                    id="text"
                    dark
                    hideLabel
                />
                <svg
                    width="36"
                    height="31"
                    viewBox="0 0 36 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.0171428 31L36 15.5L0.0171428 0L0 12.0556L25.7143 15.5L0 18.9444L0.0171428 31Z"
                        fill="#545454"
                    />
                </svg>
            </S.CreateMessage>
        </S.Container>
    );
};
