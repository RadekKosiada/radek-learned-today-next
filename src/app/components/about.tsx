export default function AboutComponent({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{text}</p>
        </>
    );
}
