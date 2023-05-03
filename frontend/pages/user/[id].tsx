import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { UserProfileView } from "../../views/userProfile/UserProfile";
import useTranslation from "next-translate/useTranslation";
import { Layout } from "../../views/layout/Layout";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";

interface Props {
    csrf: string;
}

const UserProfile = ({ csrf }: Props) => {
    const { t } = useTranslation("global");

    return (
        <Layout
            csrf={csrf ?? ""}
            small
            header={{
                title: t("user_profile"),
            }}
        >
            <UserProfileView csrf={csrf} />
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

export default UserProfile;
