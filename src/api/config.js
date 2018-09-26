import Qs from 'qs';
const config={
	  url: "/call",
	  baseURL: '',
	  method:'POST',
	  transformResponse: [function (data) {
//	  	console.log(data);
//	  	console.log(config);
//	  	if(!config.token)config.token=data.data;
	      return data
	  }],
	  headers: {'Content-Type':'application/json'},
	  params: {
	  	timestamp:new Date().getTime(),
	  	token:sessionStorage.getItem('userToken')
	  },
	  paramsSerializer: function(params) {
	    return Qs.stringify(params)
	  },
	data: {
	},
	timeout: 5000,
	withCredentials: false, // default
	responseType: 'json', // default
	onUploadProgress: function (progressEvent) {
//		console.log('onUploadProgress...');
	},
	onDownloadProgress: function (progressEvent) {
//	    console.log('onDownloadProgress...');
	},
	maxContentLength: 10000,
	validateStatus: function (status) {
	    return status >= 200 && status < 300; // default
	},
	maxRedirects: 5 // default
}
export default config
