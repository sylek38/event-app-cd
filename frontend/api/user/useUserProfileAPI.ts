import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../config";
import { UserProfileResponse } from "../../types/responses/userProfileResponse.type";

interface Args {
    csrf: string;
    id: string;
}

export const fetchAPIUserProfile = async ({ csrf, id }: Args) => {
    try {
        const data = await fetch(`${BACKEND_URL}/backend/users/${id}`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${csrf}`,
            },
        });

        return data.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const useAPIUserProfile = ({ csrf, id }: Args) =>
    useQuery<UserProfileResponse>(["user_profile"], async () =>
        fetchAPIUserProfile({ csrf, id })
    );
