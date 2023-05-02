import './checkbox.css'


const Checkbox = ({ label, value, onChange }) => {
    return (
        <div className="checkbox__alignment">
            <div className="checkbox__text">{label}</div>
            <div className="field-group">
                <input className="checkbox" type="radio" checked={value} onChange={onChange}/>
                <label htmlFor="reading" className="checkbox-label"></label>
            </div>
        </div>
    );
};


/*
<div className="checkBox__round__alignment">
    <div>
        {label}
    </div>
    <div>
        <input className="checkBox" type="checkbox" checked={value} onChange={onChange} />
    </div>
</div>

*/


export default Checkbox;
