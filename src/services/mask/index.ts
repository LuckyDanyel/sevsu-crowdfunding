export const maskSymbolsLimitation = (limitation: number) => {
    return {
        mask: 'S'.repeat(limitation),
        tokens: {
            'S': {
                pattern: /.*/,
            }
        }
    }
}