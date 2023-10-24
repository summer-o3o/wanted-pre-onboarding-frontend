import { inputTypes } from '../../types/types';
import './WrapInp.scss';

const WrapInp = (props: inputTypes) => {
  const {
    typeError,
    inpClass,
    errorMsg,
    type,
    dataTestId,
    placeholder,
    inpName,
    onChange,
    value,
  } = props;
  return (
    <div className={`wrap_inp ${typeError}`}>
      {/* 유효성 검사에 맞지 않을시 wrap_inp에 클래스 type_error 추가 */}
      <input
        className={inpClass}
        type={type}
        data-testid={dataTestId}
        placeholder={placeholder}
        name={inpName}
        onChange={onChange}
        value={value}
      />
      <p className="desc_error">{errorMsg}</p>
    </div>
  );
};

export default WrapInp;
