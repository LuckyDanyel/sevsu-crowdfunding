export default function (props: { width: number, minWidth: number }) {
    const { width, minWidth } = props;
    const getStyles = () => {
        if(width) {
            return {
                'width': width + 'px',
            }
        }
        if(minWidth) {
            return {
                'min-width': minWidth + 'px',
                'max-width': minWidth + 'px',
            }
        }
    }

    return {
        getStyles,
    }
}