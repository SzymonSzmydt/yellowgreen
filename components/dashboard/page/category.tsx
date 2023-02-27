import style from './styles/category.module.css';

export function Category() {


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('/api/dashboard/postProduct', {
        method: 'POST',
        body: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      console.error(error);
    }
  };
    return (
        <>
        <h2>Zarządzaj kategorią produktu</h2>
        <br/>
        <form onSubmit={handleSubmit}>

        </form>
        </>
    )
}