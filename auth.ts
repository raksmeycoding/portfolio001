import NextAuth, {Account, User} from "next-auth"
import Google from "@auth/core/providers/google";
import {AdapterUser} from "@auth/core/adapters";
import connectDb from "@/lib/db";
import {User as UserDb} from "@/models/user";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Google,
    ],

    callbacks: {
        async session({session, token}) {
            if (token?.sub && token?.role) {
                session.user.id = token.sub;
                // session.user.role = token.role;
            }
            return session;
        },

        async jwt({token, user}) {
            if (user) {
                // token.role = user.role;
            }
            return token;
        },


        signIn: async ({user, account}: { user: User | AdapterUser, account: Account | null }) => {
            if (account?.provider === "google") {
                try {
                    const {email, name, image, id} = user;
                    console.log("User: ", user)
                    await connectDb();
                    const alreadyUser = await UserDb.findOne({email});
                    console.log("alreadyUser:", alreadyUser);

                    if (!alreadyUser) {
                        await UserDb.create({firstName: name, lastName: image, email, image, id,})
                    }
                    return true;

                } catch (error) {
                    throw new Error("Error while creating user");
                }
            }

            return account?.provider === "credentials";
        }


    },


})


