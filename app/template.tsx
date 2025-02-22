export default function Template({ children }: { children: React.ReactNode }) {
    return <div className={"template"}>
        <h2>我是Template 模板</h2>
        {children}
    </div>
}