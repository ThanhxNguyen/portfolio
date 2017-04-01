export const primaryColor = '#212121';
export const secondaryColor = '#42A5F5';
export const textColor = {
    whiteInDark: '#E1E1E1',
    white: '#FFFFFF'
}
export function primaryColorAlpha(alpha) { return `rgba(33, 33, 33, ${alpha})`}

const styles = {};
    styles.primaryColorAlpha = primaryColorAlpha;
    styles.container = {
        paddingTop: '100px',
        width: '80%',
        margin: 'auto',
        marginBottom: '100px'
    }
    styles.secondaryColor = {
        color: secondaryColor
    }
    styles.baseBtn = {
        border: `1px solid ${secondaryColor}`,
        borderRadius: '4px',
        padding: '6px 12px',
        margin: '0',
        color: secondaryColor,
        transition: 'all .1s ease-in',
        ':hover': {
            backgroundColor: secondaryColor,
            color: textColor.white,
            transition: 'all .1s ease-in'
        }
    }
export default styles;