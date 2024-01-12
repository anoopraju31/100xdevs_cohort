import { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import AppContext from './context'
import axios from '../utills/axios'
import toast from 'react-hot-toast'
import Button from './Button'
import InputField from './InputField'
import InputItem from './InputItem'

const Form = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [interests, setInterests] = useState([])
	const [interestInput, setInterestInput] = useState('')
	const [socialInput, setSocialInput] = useState('')
	const [socialMediaLink, setSocialMediaLink] = useState('')
	const [socials, setSocials] = useState([])
	const [isDisabled, setIsDisabled] = useState(false)
	const navigate = useNavigate()
	const { card, removeCardFromEdit, isEditForm, changeToCreateForm } =
		useContext(AppContext)

	useEffect(() => {
		if (!isEditForm) return

		setName(card?.name)
		setDescription(card?.description)
		setInterests(card.interests)
		setSocials(card.socials)
	}, [card, isEditForm])

	useEffect(() => {
		return () => {
			removeCardFromEdit()
			changeToCreateForm()
		}
	}, [changeToCreateForm, removeCardFromEdit])

	const handleNameChange = useCallback((e) => setName(e.target.value), [])
	const handleDescriptionChange = useCallback(
		(e) => setDescription(e.target.value),
		[],
	)
	const handleInterestInputChange = useCallback(
		(e) => setInterestInput(e.target.value),
		[],
	)
	const handleSocialInputChange = useCallback(
		(e) => setSocialInput(e.target.value),
		[],
	)

	const handleSocialMediaLink = useCallback(
		(e) => setSocialMediaLink(e.target.value),
		[],
	)

	const sendRequest = useCallback(
		async (payload) => {
			if (isEditForm)
				return await axios.put(`/business-card/:${card.id}`, payload)
			return await axios.post('/business-card/create', payload)
		},
		[isEditForm, card],
	)

	const clearForm = useCallback(() => {
		setName('')
		setDescription('')
		setInterestInput('')
		setSocialInput('')
	}, [])

	const addInterest = useCallback(() => {
		setInterests((prev) => [...prev, { id: uuidv4(), title: interestInput }])
		setInterestInput('')
	}, [interestInput])

	const removeInterest = useCallback((id) => {
		setInterests((prev) => prev.filter((interest) => interest.id !== id))
	}, [])

	const addSocial = useCallback(() => {
		setSocials((prev) => [
			...prev,
			{ id: uuidv4(), title: socialInput, link: socialMediaLink },
		])
		setSocialInput('')
		setSocialMediaLink('')
	}, [socialInput, socialMediaLink])
	const removeSocial = useCallback((id) => {
		setSocials((prev) => prev.filter((social) => social.id !== id))
	}, [])

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			setIsDisabled(true)

			const payload = {
				name,
				description,
				interests,
				socials,
			}

			const response = await sendRequest(payload)

			toast.success(response.data.message)

			clearForm()
			removeCardFromEdit()
			changeToCreateForm()
			navigate('/')
		} catch (error) {
			console.error(error)
			toast.error(error.response.data.message)
		} finally {
			setIsDisabled(false)
		}
	}

	return (
		<form
			className='px-0 py-5 md:p-10 flex flex-col gap-4'
			onSubmit={handleSubmit}>
			<InputField
				id='name'
				name='name'
				label='Name'
				placeholder='Enter your name'
				type='text'
				value={name}
				isDisabled={isDisabled}
				handleChange={handleNameChange}
			/>

			<InputField
				id='description'
				name='description'
				label='Description'
				placeholder='Enter your description'
				isTextarea
				rows={5}
				value={description}
				isDisabled={isDisabled}
				handleChange={handleDescriptionChange}
			/>

			<div className='flex flex-col p-2 gap-2 border rounded-lg border-orange-300 focus:ring-orange-500'>
				<div className='w-full flex justify-between gap-2'>
					<div className='flex-1 h-fit'>
						<InputField
							id='interest'
							name='interest'
							label='Interest'
							placeholder='Enter your interest'
							type='text'
							value={interestInput}
							isDisabled={isDisabled}
							handleChange={handleInterestInputChange}
						/>
					</div>
					<Button
						title='Add'
						type='button'
						handleClick={addInterest}
						isDisabled={isDisabled || !interestInput}
						style='!w-fit h-fit'
					/>
				</div>

				{interests.length !== 0 && (
					<div className='flex gap-2 items-center font-mono text-orange-900'>
						<p className='pl-1 pb-[2px] font-bold'>Interests:</p>
						<div className='flex py-1 gap-2 overflow-x-auto custom-scrollbar'>
							{interests.map(({ id, title }) => (
								<InputItem
									key={id}
									title={title}
									handleClick={() => removeInterest(id)}
								/>
							))}
						</div>
					</div>
				)}
			</div>

			<div className='flex flex-col p-2 gap-2 border rounded-lg border-orange-300'>
				<InputField
					id='social-link'
					name='social-link'
					label='Social media link'
					placeholder='Enter your social media link'
					type='text'
					value={socialMediaLink}
					isDisabled={isDisabled}
					handleChange={handleSocialMediaLink}
				/>

				<div className='w-full flex justify-between gap-2'>
					<div className='flex-1 h-fit'>
						<InputField
							id='media'
							name='media'
							label='Media Name'
							placeholder='Enter your media name'
							type='text'
							value={socialInput}
							isDisabled={isDisabled}
							handleChange={handleSocialInputChange}
						/>
					</div>
					<Button
						title='Add'
						type='button'
						handleClick={addSocial}
						isDisabled={isDisabled || !socialInput || !socialMediaLink}
						style='!w-fit h-fit'
					/>
				</div>

				{socials.length !== 0 && (
					<div className='flex gap-2 items-center font-mono text-orange-900'>
						<p className='pl-1 pb-[2px] font-bold'>Social Media:</p>
						<div className='flex py-1 gap-2 overflow-x-auto custom-scrollbar'>
							{socials.map(({ title, link, id }) => (
								<InputItem
									key={id}
									title={title}
									link={link}
									handleClick={() => removeSocial(id)}
								/>
							))}
						</div>
					</div>
				)}
			</div>

			<div className='flex justify-center'>
				<Button title='Submit' type='submit' isDisabled={isDisabled} />
			</div>
		</form>
	)
}

export default Form
