import {
    useEffect,
    useState
} from 'react';

export default function useAxios(axiosRequest, options = {}) {
    const [error, setError] = useState({})
    const [result, setResult] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(async () => {
        try {
            async function getData(){
                const response = await axiosRequest()
                console.log(response)
                setResult(response)
            }
            void await getData()
        } catch (error){
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [axiosRequest])

    return { isLoading, result, error }
}