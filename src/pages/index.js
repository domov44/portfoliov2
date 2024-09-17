import React, { useState, useEffect, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

const Home = () => {

    return ( <p>Test</p>)
}

export default Home;
