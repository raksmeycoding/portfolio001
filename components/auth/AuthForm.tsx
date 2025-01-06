'use client'

import React from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import GoogleLoginBtn from "@/components/auth/GoogleLoginBtn";
import AppleLoginBtn from "@/components/auth/AppleLoginBtn";
import FacebookLoginBtn from "@/components/auth/FacebookLoginBtn";

const formSchema = z.object({
        email: z.string().email({message: "Email address is required"}),
        password: z.string().min(8, {message: "Password is required"}),
        confirmPassword: z.string().min(8, {message: "Password confirmation is required"})
    }).superRefine((val, ctx) => {
        if (val.password !== val.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Password does not math!',
                path: ['confirmPassword'],
            })
        }
    })

;

const AuthForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form values submitted:", values);
        // Handle form submission logic here.
    }

    return (
        <div className="container mx-auto">

            <div className={`flex flex-col items-center justify-center h-[80vh]`}>

                <div className={`w-11/12 sm:w-7/12 md:w-6/12 lg:w-4/12`}>

                    <h1 className={`text-3xl mb-6`}>Register with us!</h1>


                    <Form {...form} >
                        <form className={`w-full`} onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input className={`w-full`} placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage
                                            className={`text-sm`}>{form.formState.errors.email?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input className={`w-full`} type="password"
                                                   placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage
                                            className={`text-sm`}>{form.formState.errors.password?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input className={`w-full`} type="password"
                                                   placeholder="Confirm your password" {...field} />
                                        </FormControl>
                                        <FormMessage
                                            className={`text-sm`}>{form.formState.errors.confirmPassword?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className={`mt-8`} variant={"login"}>Submit</Button>
                        </form>
                    </Form>

                    {/* Continue Section*/}
                    <div className={`flex flex-row items-center gap-2 mt-4`}>

                        <div className={`h-[1px] w-full bg-accent`}></div>

                        <div className={`text-nowrap`}>
                            Or continue with
                        </div>

                        <div className={`h-[1px] w-full bg-accent`}></div>

                    </div>


                    {/*Social Login Section*/}
                    <div className={`flex flex-row items-center mt-6 gap-2 `}>
                        <GoogleLoginBtn/>
                        <AppleLoginBtn/>
                        <FacebookLoginBtn/>
                    </div>

                    {/*Dont have account section*/}
                    <div className={`mt-6 text-center`}>Don&#39;t have an account? Sign up
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AuthForm;
