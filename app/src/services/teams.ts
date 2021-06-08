import * as mst from "@microsoft/teams-js"

export const downloadFile = () => {
    mst.getContext((context) => console.log(context.hostClientType))

    const fileOpenParms: mst.FilePreviewParameters = {
        entityId: "aaa",
        objectUrl: "fullurl",
        title: "pdf gen",
        type: "pdf",
        description: "more desc",
        downloadUrl: "optional sas link",
        webPreviewUrl: "",
    }
    mst.openFilePreview(fileOpenParms)
}