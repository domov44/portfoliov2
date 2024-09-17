import React, { useState } from 'react';
import { confirmSignIn, signIn, resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import Heading from '../../textual/Heading';
import { useRouter } from 'next/navigation';
import TextInput from '../../inputs/TextInput';
import PasswordInput from '../../inputs/PasswordInput';
import FormError from '../FormError';
import Form from '../Form';
import Button from '../../button/Button';
import { notifySuccess, notifyError } from '../../alerts/Toastify';
import IconButton from '../../button/IconButton';
import { FaArrowLeftLong } from "react-icons/fa6";
import Stack from '../../wrapper/Stack';
import { useUser } from '../../../../contexts/UserContext.js';
import Tips from '../../textual/Tips';

function LoginForm() {
    const router = useRouter();
    const { login } = useUser();
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
    const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);
    const [error, setError] = useState(null);
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showForgetPasswordFormstep1, setShowForgetPasswordFormstep1] = useState(false);
    const [showForgetPasswordFormstep2, setShowForgetPasswordFormstep2] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState('');
    const [backButtonClicked, setBackButtonClicked] = useState(false);


    const handleSignIn = async (event) => {
        try {
            event.preventDefault();
            setIsDisable(true);
            setIsLoading(true);
            const { isSignedIn, nextStep } = await signIn({ username, password });
            console.log('Réponse de l\'API après connexion :', { isSignedIn, nextStep });

            if (!isSignedIn && nextStep && nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
                try {
                    setShowResetPasswordForm(true);
                    setShowLoginForm(false);
                    setIsDisable(false);
                    setIsLoading(false);
                } catch (error) {
                    console.log('Erreur lors de la réinitialisation du mot de passe :', error);
                    setError("Erreur lors de la réinitialisation du mot de passe.");
                    notifyError("Réinitialisation du mot de passe échouée");
                    setIsDisable(false);
                    setIsLoading(false);
                }
                return;
            }

            if (isSignedIn) {
                notifySuccess("Connexion établie avec succès");
                login();
                setIsDisable(false);
                setIsLoading(false);
                router.push('/admin');
            } else {
                console.log('La connexion a échoué.');
                setError("Nom d'utilisateur ou mot de passe incorrect.");
                notifyError("Connexion échouée");
                setIsDisable(false);
                setIsLoading(false);
            }
        } catch (error) {
            console.log('Erreur lors de la connexion :', error);
            if (error.code === 'NotAuthorizedException') {
                setError("Nom d'utilisateur ou mot de passe incorrect.");
                notifyError("Nom d'utilisateur ou mot de passe incorrect.");
                setIsDisable(false);
                setIsLoading(false);
            } else {
                setError(error.message);
                notifyError("Connexion échouée");
                setIsDisable(false);
                setIsLoading(false);
            }
        }
    };

    const handleInputChange = () => {
        setError(null);
    };

    const handleback = () => {
        setShowResetPasswordForm(false);
        setShowLoginForm(true);
        setShowForgetPasswordForm(false);
        handleInputChange();
        setShowForgetPasswordFormstep2(false);
        setBackButtonClicked(true);
    };

    const handleForget = () => {
        setShowLoginForm(false);
        setShowForgetPasswordForm(true);
        setShowForgetPasswordFormstep1(true)
    };

    const handlePasswordReset = async () => {
        if (newPassword !== confirmPassword) {
            setError("Les 2 mots de passe ne correspondent pas");
            notifyError("Changement du mot de passe échouée");
            return;
        }

        try {
            const challengeResponse = newPassword;
            await confirmSignIn({ challengeResponse });
            notifySuccess("Mot de passe changé avec succès");
            login();
            router.push('/admin');
        } catch (error) {
            console.log('Erreur lors du changement du mot de passe :', error);
            setError("Erreur lors du changement du mot de passe.");
            notifyError("Changement du mot de passe échouée");
        }
        return;
    };

    const handleForgetPassword = async () => {
        try {
            if (!username) {
                setError("Veuillez saisir votre adresse e-mail.");
                return;
            }

            await resetPassword({ username });
            notifySuccess("Email envoyé avec succès");
            setShowForgetPasswordFormstep1(false);
            setShowForgetPasswordFormstep2(true);
        } catch (error) {
            console.log('Erreur lors de l\'envoi de l\'email :', error);
            setError("Erreur lors de l'envoi de l'email");
            notifyError("L'envoi de l'email a échoué");
        }
    };

    const handleConfirmResetPassword = async () => {
        setIsDisable(true);
        setIsLoading(true);
        if (newPassword !== confirmPassword) {
            setError("Les 2 mots de passe ne correspondent pas");
            notifyError("Changement du mot de passe échouée");
            setIsDisable(false);
            setIsLoading(false);
            return;
        }

        try {
            await confirmResetPassword({ username, confirmationCode, newPassword });
            notifySuccess("Mot de passe changé, bienvenue");
            setIsDisable(false);
            setIsLoading(false);
            router.push('/');
        } catch (error) {
            console.log('Erreur lors de la confirmation de la réinitialisation du mot de passe :', error);
            setError("Erreur lors de la confirmation de la réinitialisation du mot de passe.");
            notifyError("Changement du mot de passe échouée");
            setIsDisable(false);
            setIsLoading(false);
        }
    };

    return (
        <Form autoComplete="on">
            {showLoginForm && !showResetPasswordForm && !showForgetPasswordForm && (
                <Stack animationType={backButtonClicked ? "moveFromLeft" : "fadeIn"} direction="column">
                    <TextInput
                        type="email"
                        name="email"
                        label="Email"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value); handleInputChange(); }}
                        required
                        autoComplete="username"
                        variant="blue"
                    />
                    <PasswordInput
                        label="Mot de passe"
                        name="password"
                        type="password"
                        variant="blue"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); handleInputChange(); }}
                        required
                    />
                    {error && <FormError variant="error">{error}</FormError>}
                    <Button data_cy="submit-login" type="submit" width="full-width" variant="primary" onClick={handleSignIn} disable={isDisable} loading={isLoading}>Se connecter</Button>
                    <Stack justify="end">
                        <IconButton variant="secondary-action" onClick={handleForget}>Mot de passe oublié ?</IconButton>
                    </Stack>
                </Stack>
            )}
            {showForgetPasswordForm && (
                <>
                    {showForgetPasswordFormstep1 && (
                        <Stack direction="column" animationType={"moveFromRight"}>
                            <Heading level={3}>Réinitialiser le mot de passe</Heading>
                            <Tips variant="success">
                                Rentrez le mail associé à votre compte.
                            </Tips>
                            <TextInput
                                type="email"
                                label="Email"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value); handleInputChange(); }}
                                required
                                autoComplete="username"
                                variant="blue"
                            />
                            {error && <FormError variant="error">{error}</FormError>}
                            <Stack align="center" justify="flex-end">
                                <IconButton variant="secondary-action" onClick={handleback}>Retour</IconButton>
                                <IconButton variant="action" onClick={handleForgetPassword}>Suivant</IconButton>
                            </Stack>
                        </Stack>
                    )}
                    {showForgetPasswordFormstep2 && (
                        <Stack direction="column" animationType={"moveFromRight"}>
                            {username && (
                                <Tips variant="success">
                                    1 : Rentrez le code reçu sur {username}.
                                </Tips>
                            )}
                            <TextInput
                                type="number"
                                label="Code de confirmation"
                                value={confirmationCode}
                                onChange={(e) => { setConfirmationCode(e.target.value); handleInputChange(); }}
                                required
                                variant="blue"
                            />
                            <Tips variant="success">
                                2 : Changez votre mot de passe avec au moins 8 caractères.
                            </Tips>
                            <PasswordInput
                                label="Nouveau mot de passe"
                                type="password"
                                variant="blue"
                                value={newPassword}
                                autoComplete="new-password"
                                onChange={(e) => { setNewPassword(e.target.value); handleInputChange(); }}
                                required
                            />
                            <PasswordInput
                                label="Confirmer le nouveau mot de passe"
                                type="password"
                                variant="blue"
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value); handleInputChange(); }}
                                required
                            />
                            {error && <FormError variant="error">{error}</FormError>}
                            <Stack align="center" justify="flex-end">
                                <IconButton variant="secondary-action" onClick={handleback}><FaArrowLeftLong />Retour</IconButton>
                                <Button variant="primary" onClick={handleConfirmResetPassword} disable={isDisable} loading={isLoading}>Je confirme</Button>
                            </Stack>
                        </Stack>
                    )}
                </>
            )}
            {showResetPasswordForm && (
                <Stack direction="column" animationType={"moveFromRight"}>
                    <Heading level={3}>Choisissez votre mot de passe</Heading>
                    <Tips variant="success">
                        Définissez votre propre mot de passe d'au moins 8 caractères.
                    </Tips>
                    <PasswordInput
                        label="Nouveau mot de passe"
                        type="password"
                        variant="blue"
                        autoComplete="new-password"
                        value={newPassword}
                        onChange={(e) => { setNewPassword(e.target.value); handleInputChange(); }}
                        required
                    />
                    <PasswordInput
                        label="Confirmer le nouveau mot de passe"
                        type="password"
                        variant="blue"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value); handleInputChange(); }}
                        required
                    />
                    {error && <FormError variant="error">{error}</FormError>}
                    <Stack align="center" justify="flex-end">
                        <IconButton variant="secondary-action" onClick={handleback}><FaArrowLeftLong />Retour</IconButton>
                        <Button variant="primary" onClick={handlePasswordReset}>Je confirme</Button>
                    </Stack>
                </Stack>
            )}
        </Form>
    );
}

export default LoginForm;