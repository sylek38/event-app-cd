import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";
import { Layout } from "../../views/layout/Layout";
import { MessagesView } from "../../views/messages/MessagesView";

interface Props {
    csrf: string;
}

const Messages = ({ csrf }: Props) => {
    const { t } = useTranslation("settings");

    return (
        <Layout
            csrf={csrf ?? ""}
            small
            header={{
                title: t("heading"),
            }}
        >
            <MessagesView />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const queryClient = new QueryClient();
    const csrf = req.cookies["csrf"] ?? "";

    await queryClient.prefetchQuery(
        ["authorization"],
        async () => await fetchAPIAuth({ csrf })
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            csrf,
        },
    };
};

export default Messages;
