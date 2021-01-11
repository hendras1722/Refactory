# Refactory
Jawaban

# Soal 4
## Create github App
1. buat Github App terlebih dahulu https://github.com/settings/developers
2. Register a New Application
3. isikan semua Homepage URL dan Authorization sesuaikan dengan url di react default : http://localhost:3000
4. jika sudah simpan code client_id dan client_secret.

## File App.js

cari code dibawah ini dan masukkan clientid dan clientsecret

  <GitHubLogin
          clientId="Masukkan disini"
          redirectUri="http://localhost:3000"
          clientSecret="Masukkan disini"
          onSuccess={(name) => setName(name)}
          onFailure={(resp) => console.log(resp)}
        />

## File GithubLogin

1. cari code dibawah ini dan masukkan redirect uri nya http://localhost:3000

 static defaultProps = {
    buttonText: "Sign in with GitHub",
    redirectUri: "http://localhost:3000",
    scope: "user:email",
    onRequest: () => { },
    onSuccess: () => { },
    onFailure: () => { },
  };
  
2. cari code dibawah ini dan data tambahkan code menjadi data.code

 onSuccess = (data) => {
    console.log(data, 'inidata')
    if (!data.code) {
      return this.onFailure(new Error("'code' not found"));
    }

    this.onGetAccessToken(data.code);
  };
  
3. cari code dibawah ini dan tambahkan grant_type: "user:email". tambah kan access_token di bagian then menjadi access_token.data.access_token

onGetAccessToken = (code) => {
    console.log(code, "getacces")
    const { clientId, clientSecret } = this.props;
    const body = {
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      grant_type: "user:email"
    };
    console.log(body, 'inilo')
    const options = { headers: { accept: "application/json" } };
    axios.post(` https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`, body, options)
      .then((access_token) => {
        console.log(access_token, 'inini')
        // @ts-ignore
        this.onGetProfile(access_token.data.access_token);
      })
      .catch((err) => this.onFailure(err.message));
  };
  
  4. terakhir untuk menampilkan nama tambahkan response menjadi response.data.login
  
   onGetProfile = (token) => {
    console.log(token, 'initoken')
    axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: "token " + token,
      },
    }).then((response) => {
      console.log(response, 'iniresponse')
      this.props.onSuccess(response.data.login);
    });
  };
