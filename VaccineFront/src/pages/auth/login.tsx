import { useState } from 'react';
import { EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '../../Services/AuthService';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";



  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    username: '',  
    password: ''
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await AuthService.Login(loginData)
      localStorage.setItem('token', response.token); 

      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Error logging in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-6 py-12">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <LockClosedIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-blue-600 text-3xl font-bold">Vaccination System</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access the vaccination management system for healthcare professionals
          </p>
        </div>

        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-12"></div>

        <div className="flex justify-center">
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-lg w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-blue-600 text-2xl font-bold mb-2">Access Your Account</h2>
              <p className="text-gray-600">Enter your credentials</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block mb-3 text-blue-600 font-medium">
                  Username:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type='text'
                    required
                    value={loginData.username}
                    onChange={handleLoginChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 transition-all duration-200"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="loginPassword" className="block mb-3 text-blue-600 font-medium">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="loginPassword"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 transition-all duration-200"
                    placeholder="Your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-600 text-sm">Remember me</span>
                </label>
                <button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign in to account'}
              </button>
            </form>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <UserIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-semibold mb-2">Complete Management</h3>
            <p className="text-gray-600 text-sm">Manage patients and vaccines efficiently</p>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <LockClosedIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-semibold mb-2">Security</h3>
            <p className="text-gray-600 text-sm">Data protected with advanced encryption</p>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-blue-600 font-semibold mb-2">Support</h3>
            <p className="text-gray-600 text-sm">Specialized technical support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}