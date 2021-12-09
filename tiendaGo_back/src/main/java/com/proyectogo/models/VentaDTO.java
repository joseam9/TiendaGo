package com.proyectogo.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ventas")
public class VentaDTO {
	
	@Id
	private String _id;
	private long cedula_cliente;
	private long codigo_venta;
	private ArrayList<DetalleVenta> detalle_venta;
	private Double iva_venta;
	private Double total_venta;
	private Double valor_venta;
	private String ciudad_venta;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public long getCedula_cliente() {
		return cedula_cliente;
	}
	public void setCedula_cliente(long cedula_cliente) {
		this.cedula_cliente = cedula_cliente;
	}
	public long getCodigo_venta() {
		return codigo_venta;
	}
	public void setCodigo_venta(long codigo_venta) {
		this.codigo_venta = codigo_venta;
	}
	public ArrayList<DetalleVenta> getDetalle_venta() {
		return detalle_venta;
	}
	public void setDetalle_venta(ArrayList<DetalleVenta> detalle_venta) {
		this.detalle_venta = detalle_venta;
	}
	public Double getIva_venta() {
		return iva_venta;
	}
	public void setIva_venta(Double iva_venta) {
		this.iva_venta = iva_venta;
	}
	public Double getTotal_venta() {
		return total_venta;
	}
	public void setTotal_venta(Double total_venta) {
		this.total_venta = total_venta;
	}
	public Double getValor_venta() {
		return valor_venta;
	}
	public void setValor_venta(Double valor_venta) {
		this.valor_venta = valor_venta;
	}
	public String getCiudad_venta() {
		return ciudad_venta;
	}
	public void setCiudad_venta(String ciudad_venta) {
		this.ciudad_venta = ciudad_venta;
	}
	
	
	

}
