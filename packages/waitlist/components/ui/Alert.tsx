import AlertCircle from "~/components/icons/AlertCircle";
import Check from "~/components/icons/Check";

interface ErrorAlertPropTypes {
  type: string;
  message: string;
  show: boolean;
}

const ErrorAlert: React.FC<ErrorAlertPropTypes> = ({ type, message, show }) => {
  return (
    <div
      className={`alert absolute z-10 text-sm flex items-center justify-center ${
        type === "success" ? "bg-successAlert" : "bg-errorAlert"
      } rounded p-2 w-1/4 h-16 top-8 right-8`}
      style={{
        display: `${show ? "flex" : "none"}`,
      }}
    >
      {type === "success" ? (
        <Check width={20} height={20} />
      ) : (
        <AlertCircle width={20} height={20} />
      )}{" "}
      <p className="ml-2">{message}</p>
    </div>
  );
};

export default ErrorAlert;
