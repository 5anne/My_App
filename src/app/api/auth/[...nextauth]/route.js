import NextAuth from "next-auth";
import "next-auth/jwt"; //update
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NEXT_AUTH_PUBLIC_KEY,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password", placeholder: "Enter Password" }
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                const user = {
                    id: "1",
                    name: "J Smith",
                    email: "jsmith@example.com",
                    password: "P4ssword",
                    type: "Admin",
                    image: "https://picsum.photos/200/300"
                }

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    const { password, ...userWithoutPassword } = user
                    return userWithoutPassword
                }

                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        })],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.user.type = token.type
            return session
        }
    }
}
// satisfies NextAuthOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }