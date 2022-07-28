package org.generation.db;

public class ConexionMySQL implements GenericDb{
	private String cadenaConexion;
	private int puerto;

	/**
	 * @param cadenaConexion
	 * @param puerto 
	 */
	public ConexionMySQL(String cadenaConexion, int puerto) {
		this.puerto=puerto;
		this.cadenaConexion = cadenaConexion;
	}

	public String getCadenaConexion() {
		return cadenaConexion;
	}

	public void setCadenaConexion(String cadenaConexion) {
		this.cadenaConexion = cadenaConexion;
	}

	public int getPuerto() {
		return puerto;
	}

	public void setPuerto(int puerto) {
		this.puerto = puerto;
	}

	@Override
	public String insertar(int dato) {
		// TODO Auto-generated method stub
		return "Se inserta dato en DB MySQL el dato: " + dato;
	}

	@Override
	public String enlistar() {
		// TODO Auto-generated method stub
		return "Se elista dato en DB MySQL";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza dato en DB MySQL";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato en DB MySQL";
	}

}
