"use client";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <div className="">{children}</div>
        </div>
    );
}
