import './Button.css'

export const Button = ({children, title, description}) => {
    return (
        <>
            <button className='primary-button'>{title}</button>
        </>
    )
}

export default Button