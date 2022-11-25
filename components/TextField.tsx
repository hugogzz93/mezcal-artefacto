export interface IInputProps {
    name: string,
    label: string,
    value: string,
    onChange: (arg0: any) => unknown,
    readOnly?: boolean,
    disabled?: boolean,
    isLoading?: boolean
    placeholder?: string
}

export const TextField: React.FC<IInputProps> = ({
    name = '',
    placeholder,
    onChange,
    value,
    label,
    readOnly,
    disabled,
    isLoading = false
}) => {
    return (
        <div className="theme__form-controller flex flex-col p-5">
            <input className='theme__text-field outline-0 border border-white rounded-md uppercase'
                type='text' name={name} value={value} placeholder={placeholder} onChange={onChange} readOnly={readOnly} disabled={disabled}/>

            <label className='theme__text-field-label' htmlFor={name}>{label}</label>
            {isLoading && <div className="mx-2 loader loader--blue absolute top-0 right-0" style={{fontSize: '2px', position: 'absolute', top: 'calc(50% - 5em)', right: '5%'}}/>}
        </div>
    )
} 

