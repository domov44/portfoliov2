'use client';

import React, { useState } from 'react';
import { confirmSignIn, signIn, resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import styles from "../page.module.css";

export default function LoginForm() {
    const router = useRouter();
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
    const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);
    const [step, setStep] = useState(1);

    // Fonction de connexion de base
    const handleSignIn = async () => {
        setDisable(true);
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
            // Vérification si un nouveau mot de passe est requis
            if (!isSignedIn && nextStep && nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
                setShowResetPasswordForm(true);
                setShowLoginForm(false);
            } else {
                // Connexion réussie, redirection vers la page d'accueil
                router.push('/');
            }
        } catch (err) {
            setError('Erreur lors de la connexion : ' + err.message);
        } finally {
            setDisable(false);
        }
    };

    // Fonction de réinitialisation du mot de passe après la demande de Cognito
    const handlePasswordReset = async () => {
        if (newPassword !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const challengeResponse = newPassword;
            await confirmSignIn({ challengeResponse  });
            setShowResetPasswordForm(false);
            router.push('/');
        } catch (err) {
            setError('Erreur lors du changement de mot de passe : ' + err.message);
        }
    };

    // Fonction pour gérer la demande de réinitialisation de mot de passe
    const handleForgetPassword = async () => {
        setDisable(true);
        try {
            await resetPassword({ username });
            setStep(2); // Passer à la deuxième étape : saisie du code de confirmation
        } catch (err) {
            setError('Erreur lors de la demande de réinitialisation : ' + err.message);
        } finally {
            setDisable(false);
        }
    };

    // Fonction pour confirmer la réinitialisation du mot de passe avec un code de confirmation
    const handleConfirmResetPassword = async () => {
        setDisable(true);
        if (newPassword !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            setDisable(false);
            return;
        }

        try {
            await confirmResetPassword(username, confirmationCode, newPassword);
            setStep(1); // Retour à l'étape de connexion
            setShowForgetPasswordForm(false);
        } catch (err) {
            setError('Erreur lors de la confirmation du changement de mot de passe : ' + err.message);
        } finally {
            setDisable(false);
        }
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
                    <h2>{showForgetPasswordForm ? 'Réinitialiser le mot de passe' : 'Connexion'}</h2>

                    {/* Formulaire de connexion */}
                    {!showForgetPasswordForm && !showResetPasswordForm && showLoginForm && (
                        <>
                            <div>
                                <label>Nom d'utilisateur ou username :</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
                                    disabled={disable}
                                    required
                                    style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                />
                            </div>
                            <div>
                                <label>Mot de passe :</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={disable}
                                    required
                                    style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                />
                            </div>
                            <button onClick={handleSignIn} disabled={disable} style={{ padding: '0.5rem', width: '100%' }}>
                                Se connecter
                            </button>
                            <p>
                                <button
                                    type="button"
                                    onClick={() => setShowForgetPasswordForm(true)}
                                    style={{ marginTop: '1rem', background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                                >
                                    Mot de passe oublié ?
                                </button>
                            </p>
                        </>
                    )}

                    {/* Formulaire de réinitialisation de mot de passe */}
                    {showForgetPasswordForm && !showLoginForm && (
                        <>
                            {step === 1 && (
                                <>
                                    <div>
                                        <label>username ou pseudo :</label>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setusername(e.target.value)}
                                            disabled={disable}
                                            required
                                            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                        />
                                    </div>
                                    <button onClick={handleForgetPassword} disabled={disable} style={{ padding: '0.5rem', width: '100%' }}>
                                        Envoyer un username de réinitialisation
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowForgetPasswordForm(false)}
                                        style={{ marginTop: '1rem', background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                                    >
                                        Retour à la connexion
                                    </button>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <div>
                                        <label>Code de confirmation :</label>
                                        <input
                                            type="text"
                                            value={confirmationCode}
                                            onChange={(e) => setConfirmationCode(e.target.value)}
                                            disabled={disable}
                                            required
                                            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label>Nouveau mot de passe :</label>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            disabled={disable}
                                            required
                                            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                        />
                                    </div>
                                    <div>
                                        <label>Confirmer le nouveau mot de passe :</label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            disabled={disable}
                                            required
                                            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                        />
                                    </div>
                                    <button
                                        onClick={handleConfirmResetPassword}
                                        disabled={disable}
                                        style={{ padding: '0.5rem', width: '100%' }}
                                    >
                                        Confirmer le nouveau mot de passe
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        style={{ marginTop: '1rem', background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                                    >
                                        Retour
                                    </button>
                                </>
                            )}
                        </>
                    )}

                    {/* Formulaire de réinitialisation après demande */}
                    {showResetPasswordForm && (
                        <>
                            <h3>Choisissez un nouveau mot de passe</h3>
                            <div>
                                <label>Nouveau mot de passe :</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    disabled={disable}
                                    required
                                    style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                />
                            </div>
                            <div>
                                <label>Confirmer le nouveau mot de passe :</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    disabled={disable}
                                    required
                                    style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
                                />
                            </div>
                            <button onClick={handlePasswordReset} disabled={disable} style={{ padding: '0.5rem', width: '100%' }}>
                                Confirmer le nouveau mot de passe
                            </button>
                        </>
                    )}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </main>
        </div>
    );
}

