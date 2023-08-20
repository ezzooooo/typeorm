export type Version = [number, number, number]

export class VersionUtils {
    static isGreaterOrEqual(version: string, targetVersion: string): boolean {
        const v1 = parseVersion(version)
        const v2 = parseVersion(targetVersion)

        return (
            v1[0] > v2[0] ||
            (v1[0] === v2[0] && v1[1] > v2[1]) ||
            (v1[0] === v2[0] && v1[1] === v2[1] && v1[2] >= v2[2])
        )
    }
}

function parseVersion(version: string = ""): Version {
    const v: Version = [0, 0, 0]

    const versionInfos = version.split(".");

    for (let i = 0; i < 3; i++) {
        v[i] = parseInt(versionInfos[i], 10)
    }

    return v
}
