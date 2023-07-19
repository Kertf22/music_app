
type PageName = "home" | "search" | "404";

export type Page = {
    name: PageName,
    title: string,
    hasTitle: boolean,
}