export const primaryColor = '#212121';
export const secondaryColor = '#42A5F5';
export const textColor = {
    whiteInDark: '#E1E1E1',
    white: '#FFF',
    black: '#333'
}
export function primaryColorAlpha(alpha) { return `rgba(33, 33, 33, ${alpha})` }
export function activeDarkAlpha(alpha) { return `rgba(66, 66, 66, ${alpha})` }

const styles = {};
    styles.container = {
        padding: '6em 0 5em 0',
        width: '80%',
        margin: 'auto',
    }
    styles.secondaryColor = {
        color: secondaryColor
    }
    styles.baseBtn = {
        border: `1px solid ${secondaryColor}`,
        borderRadius: '4px',
        padding: '6px 12px',
        margin: '0',
        cursor: 'pointer',
        color: secondaryColor,
        transition: 'all .1s ease-in',
        ':hover': {
            backgroundColor: secondaryColor,
            color: textColor.white,
            transition: 'all .1s ease-in'
        }
    }
export default styles;