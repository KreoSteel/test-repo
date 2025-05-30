import "./Grid.css";

export function Grid ({children}) {
    return (
        <div className="grid-container">
            {children}
        </div>
    );
}