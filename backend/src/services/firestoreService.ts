import * as admin from "firebase-admin";
import {ServiceAccount} from "firebase-admin/lib/credential";
// import ConfigService from "../config/ConfigService";

const serviceAccount = "82d874ff6e8c8dfdb401d34e703cb831ba5e5ddf";


admin.initializeApp({
    credential: admin.credential.cert({
        "project_id": "fpl-stocks",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5Tjc6xMmt5HPI\npCWNDZfJ0Lpy561mb7LC0XqFoExhyVIYhErIj6h5Nclgj0nZw3rDQrn5UNyaJu39\n0q2n50BPjLN3q08esj026LWFHAuU7gWLGS9KKw7RZO23EUIElmtIuWHfYBYIMDyU\n0Dapn6t1vi16kR8cf86Xrx0EuaJR5Oy82LKRqnxE5pyQZQk+r3RVjp9KrwcA3XFP\ncX00B+4w9cmub4wyYKM+DDeueOlYL6s9OeakkHr2hjPPpN+kr+6olruKY/oawybT\ndzHosU0aVMYdyFfD3UgcTTDzPBvH+CcwEzIMcXj70gmCrRdlRqQlr6tS1djkINZl\nt0Mo45HvAgMBAAECggEACVDthZFbgwK6GstnLeUR4q4RPvH3LZq5AIK6klmW7Xr1\nxdDE17oijLF6ZdXeWcnc8/sjUW2ndu01HYPdgiml+eSHffaJXEWME/ogF3NBASRJ\norl0lK8p0reBx1M2n/drU7UqPqox1rM3ddMqpF19fRu/ZUBC3FJv8aqhSVmx15nA\n2g7uM/W2cJvUqtMSGjklr4UmrKLkByZZ14LDIlQHfmew8c6Ngdk8/ietJqoJtj6n\npu/R0945GiVp7H/FpqXmZmZ9/M+ETsZ/ZZREpZXhuCaeqT1pUL0azf2+7zu9wjUY\nJgkqwkGJ3OqN2YMNFdwxm6nk/Mwm8SH3aJZEkuYWuQKBgQD3UOT0ZbRu1uYWK02o\narz2rZkT+Rk5ZaHDDRRXcDpuG81cOGobaxeH+sG/j0n7uThuJeAeg/vqW86XSf+z\nejFT3ERSWKZgjBJtkKw2+NPay03YdWFdRN8glTKDVhf3OeQ/In7ivNIu11ZfbTE4\n4lbuJH/UT5v6nEKxprFPg/zRJwKBgQC/z+nuxFuzj4U5QVT/eeO1oxOwSxRVZHPy\nfQEd28xtJ83K09qhefvFY74IhZmGlc7OHobnRPOklS/Ah1ONfPq1qHkS9ytdNzE4\nyEOjwkfDwkpsVBT9kP+3yps7+6V703xlDtzbNhAE8YvAxDUHCZ23ffFcBAFP1tnd\n8l4WQiKl+QKBgBNZAcBY4Ie3SiK72oRtbUEDDbGxUBbca449zLSWdAu/Iw6u3yYr\n95hMtrGMvSXzNIXxcpoQizmnWv8c6+MXkRpVZgbnJoTxEFP/+GkIiFJai0l+zVIl\nnCsJYP1DU/akUcXapgCI8wx1Di3C9hHUKybQNive2n39kX4iY0asNbALAoGBAK3S\nPo5Ph0J7ZyFxoRM7ZC1wMSFriGux8pjmyyJB00l/7rBFuDTpFE3Wi5mxaGVcUOLd\nKyddhuW5BGMWv5LSlWgV2lJjhvqcT5DDevhl0R8HbOYqdDMtOW9WvcJn05kZF/uE\nsoQ8w9uXASyZIezUvAZSrWzTfFTbwOevAbBuEnQRAoGAVFVZKnriAIZBhCebLLEc\nq8vtghRAlLI7uzI+oMJ1FCYYwL3PG3LEd1oV0r3XTGxpE1mr0Jzk914A05kY36ay\nbiaqD40lywMFY82XncnHIMH3vm7cfacfAyov+uBGxpa5IFLkzowYTtEfwBFZ6l4Z\n7B4dC/nzRrGC3pZ60nzn/40=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-z8sya@fpl-stocks.iam.gserviceaccount.com",
             } as ServiceAccount
    )
});

export const firestoreDBService = admin.firestore();