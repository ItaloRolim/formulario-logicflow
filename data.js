const SUPABASE_URL = 'https://pokvmxwausjqhejgbwzj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBva3ZteHdhdXNqcWhlamdid3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyOTcyNzksImV4cCI6MjAzNzg3MzI3OX0.cZ1KFPMKhoStpH1wpFO50AVI5YfC5GsZuh_XMKO3j1Q';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    const { data, error } = await supabase
        .from('users') // Substitua 'users' pelo nome da sua tabela no Supabase
        .insert([{ name: name, email: email, number: number }]);

    if (error) {
        console.error('Erro ao inserir dados:', error);
    } else {
        console.log('Dados inseridos com sucesso:', data);
    }
}

document.getElementById('contactForm').addEventListener('submit', handleSubmit);
