// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// export const authOptions = {
//     secret: process.env.NEXT_AUTH_PUBLIC_KEY,
//     session: {
//         strategy: 'jwt',
//     },
//     providers: [
//         CredentialsProvider({
//             Credentials: {
//                 email: {
//                     label: 'Email',
//                     type: 'email',
//                     placeholder: 'Enter Email'
//                 },
//                 password: {
//                     label: 'Password',
//                     type: 'password',
//                     placeholder: 'Enter Password'
//                 }
//             },
//             async authorize(credentials) {
//                 if (!credentials) {
//                     return null;
//                 }
//                 return true;
//             }
//         })
//     ]
// };
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }

import NextAuth from "next-auth"
import "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials";

const credsProvider = CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
        username: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Password" }
    },
    async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = {
            id: "1",
            name: "J Smith",
            email: "jsmith@example.com",
            password: "P4ssword"
        }

        if (credentials?.username === user.email && credentials?.password === user.password) {
            const { password, ...userWithoutPassword } = user
            return userWithoutPassword
        }

        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    }
})

const authOptions = {
    providers: [credsProvider],
    session: {
        strategy: "jwt"
    }
}
// satisfies NextAuthOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }