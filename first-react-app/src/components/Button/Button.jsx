import './Button.css'

export const Button = ({children, title, description, onClick}) => {
    return (
        <>
            <button onClick={onClick} className='primary-button'>{children}</button>
        </>
    )
}

export default Button