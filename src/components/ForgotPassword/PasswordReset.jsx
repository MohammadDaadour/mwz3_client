import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const {id, token} = useParams();
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${server}/user/reset-password-user/${id}/${token}`, {
        password,
      })
      .then((res) => {
        navigate("/login");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div lang="ar" className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          lang="ar"
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
        >
          اعادة تعيين كلمة مرور جديدة
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                كلمة المرور الجديدة
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  autoComplete="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full p-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="text-sm"></div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
              >
                تعيين
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
