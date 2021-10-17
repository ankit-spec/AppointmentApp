export const API_BASE_URL = 'http://18.117.1.132/';
export const getApiUrl = endPoint => API_BASE_URL + endPoint;

export const PHONE_API = getApiUrl('v1/users/create');
export const VERIFY_OTP_URL = getApiUrl('v1/users/otp_verify');
export const REGISTER_URL = getApiUrl('v1/users/update_profile');
